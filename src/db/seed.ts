import bcrypt from 'bcryptjs';
import { PrismaClient } from './prisma/generated/prisma-client';
import { UserRole_ENUM } from '../code/enums';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed do sistema IoT...');

  try {
    // Criar usuários
    const adminUser = await prisma.user.create({
      data: {
        username: 'admin@smartHome',
        passwordHash: await bcrypt.hash('Admin@1234', 10),
        role: UserRole_ENUM.ADMIN,
      }
    });

    const standardUser = await prisma.user.create({
      data: {
        username: 'user@smartHome',
        passwordHash: await bcrypt.hash('User@1234', 10),
        role: UserRole_ENUM.STANDARD_USER,
      }
    });

    // Criar dispositivos
    const smartLight = await prisma.device.create({
      data: {
        name: 'Luz Sala Principal',
        type: 'SMART_LIGHT',
        status: true,
        aesKey: 'a1b2c3d4e5f6g7h8',
        userId: adminUser.id,
        firmwareVersion: '2.1.0'
      }
    });

    const thermostat = await prisma.device.create({
      data: {
        name: 'Termostato Quarto',
        type: 'THERMOSTAT',
        status: false,
        aesKey: 'h8g7f6e5d4c3b2a1',
        userId: standardUser.id,
        firmwareVersion: '1.5.2'
      }
    });

    // Comandos para os dispositivos
    await prisma.command.createMany({
      data: [
        {
          name: 'LIGAR_LUZ',
          payload: JSON.stringify({ intensity: 75 }),
          deviceId: smartLight.id
        },
        {
          name: 'AJUSTAR_TEMPERATURA',
          payload: JSON.stringify({ temp: 22 }),
          deviceId: thermostat.id
        }
      ]
    });

    // Regras de automação
    await prisma.automationRule.create({
      data: {
        name: "Turn On AC if Temp > 25",
        triggerCondition: 'temperature > 25',
        action: JSON.stringify({ command: 'LIGAR_ARCONDICIONADO' }),
        deviceId: thermostat.id
      }
    });

    // Notificações
    await prisma.notification.createMany({
      data: [
        {
          message: 'Novo dispositivo conectado',
          channel: 'APP',
          userId: adminUser.id
        },
        {
          message: 'Temperatura acima do normal',
          channel: 'EMAIL',
          userId: standardUser.id
        }
      ]
    });

    // Logs do sistema
    await prisma.systemLog.createMany({
      data: [
        {
          type: 'INFO',
          message: 'Sistema iniciado',
          source: 'SYSTEM'
        },
        {
          type: 'DEVICE',
          message: 'Dispositivo conectado: Luz Sala Principal',
          source: 'DEVICE'
        }
      ]
    });

    console.log('Seed concluído com sucesso!');
  } catch (error) {
    console.error('Erro durante o seed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
