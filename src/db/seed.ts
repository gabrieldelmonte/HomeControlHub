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
        email: 'admin@smarthome.com',
        passwordHash: await bcrypt.hash('Admin@1234', 10),
        role: UserRole_ENUM.ADMIN,
      }
    });

    const standardUser = await prisma.user.create({
      data: {
        username: 'user@smartHome',
        email: 'user@smarthome.com',
        passwordHash: await bcrypt.hash('User@1234', 10),
        role: UserRole_ENUM.STANDARD_USER,
      }
    });

    // Criar dispositivos (todos pertencentes ao usuário padrão)
    const smartLight = await prisma.device.create({
      data: {
        name: 'Luz Sala Principal',
        type: 'SMART_LIGHT',
        status: true,
        description: 'Lâmpada LED inteligente com controle de brilho e cor',
        location: 'Sala Principal',
        mqttTopic: 'devices/sala/luz_principal',
        aesKey: 'a1b2c3d4e5f6g7h8',
        userId: standardUser.id,
      }
    });

    const thermostat = await prisma.device.create({
      data: {
        name: 'Termostato Quarto',
        type: 'THERMOSTAT',
        status: false,
        description: 'Termostato inteligente com controle automático de temperatura',
        location: 'Quarto Principal',
        mqttTopic: 'devices/quarto/termostato',
        aesKey: 'h8g7f6e5d4c3b2a1',
        userId: standardUser.id,
      }
    });

    const smartSwitch = await prisma.device.create({
      data: {
        name: 'Interruptor Cozinha',
        type: 'SMART_SWITCH',
        status: false,
        description: 'Interruptor inteligente para controle de iluminação da cozinha',
        location: 'Cozinha',
        mqttTopic: 'devices/cozinha/interruptor',
        aesKey: 'k9j8h7g6f5e4d3c2',
        userId: standardUser.id,
      }
    });

    const smartCamera = await prisma.device.create({
      data: {
        name: 'Câmera Entrada',
        type: 'SMART_CAMERA',
        status: true,
        description: 'Câmera de segurança com visão noturna e detecção de movimento',
        location: 'Entrada Principal',
        mqttTopic: 'devices/entrada/camera',
        aesKey: 'p0o9i8u7y6t5r4e3',
        userId: standardUser.id,
      }
    });

    // Criar mais alguns dispositivos para demonstrar a funcionalidade admin
    const smartPlug = await prisma.device.create({
      data: {
        name: 'Tomada Inteligente Escritório',
        type: 'SMART_PLUG',
        status: false,
        description: 'Tomada inteligente com monitoramento de energia',
        location: 'Escritório',
        mqttTopic: 'devices/escritorio/tomada',
        aesKey: 'x1y2z3a4b5c6d7e8',
        userId: standardUser.id,
      }
    });

    const smartSensor = await prisma.device.create({
      data: {
        name: 'Sensor Temperatura e Umidade',
        type: 'SMART_SENSOR',
        status: true,
        description: 'Sensor para monitoramento ambiental',
        location: 'Sala Principal',
        mqttTopic: 'devices/sala/sensor_ambiente',
        aesKey: 'f9g8h7i6j5k4l3m2',
        userId: standardUser.id,
      }
    });

    // Comandos para os dispositivos
    await prisma.command.createMany({
      data: [
        {
          name: 'LIGAR_LUZ',
          payload: { intensity: 75, color: { red: 255, green: 255, blue: 255 } },
          deviceId: smartLight.id
        },
        {
          name: 'AJUSTAR_TEMPERATURA',
          payload: { temperature: 22, mode: 'auto' },
          deviceId: thermostat.id
        },
        {
          name: 'LIGAR_INTERRUPTOR',
          payload: { state: 'ON' },
          deviceId: smartSwitch.id
        },
        {
          name: 'INICIAR_GRAVACAO',
          payload: { duration: 3600, quality: 'HD' },
          deviceId: smartCamera.id
        },
        {
          name: 'LIGAR_TOMADA',
          payload: { state: 'ON' },
          deviceId: smartPlug.id
        },
        {
          name: 'LER_TEMPERATURA',
          payload: { type: 'temperature' },
          deviceId: smartSensor.id
        }
      ]
    });

    // Regras de automação
    await prisma.automationRule.createMany({
      data: [
        {
          name: "Ligar luz ao anoitecer",
          triggerCondition: 'time_equals 18:00',
          action: { command: 'LIGAR_LUZ', payload: { intensity: 50 } },
          deviceId: smartLight.id
        },
        {
          name: "Ajustar temperatura se > 25°C",
          triggerCondition: 'temperature > 25',
          action: { command: 'AJUSTAR_TEMPERATURA', payload: { temperature: 22, mode: 'cooling' } },
          deviceId: thermostat.id
        },
        {
          name: "Iniciar gravação se movimento detectado",
          triggerCondition: 'motion_detected',
          action: { command: 'INICIAR_GRAVACAO', payload: { duration: 1800 } },
          deviceId: smartCamera.id
        },
        {
          name: "Desligar tomada à meia-noite",
          triggerCondition: 'time_equals 00:00',
          action: { command: 'DESLIGAR_TOMADA', payload: { state: 'OFF' } },
          deviceId: smartPlug.id
        }
      ]
    });

    // Notificações
    await prisma.notification.createMany({
      data: [
        // Welcome message for standard user
        {
          message: 'Welcome to Home Control Hub! You can now manage and monitor all your smart devices from this dashboard.',
          type: 'WELCOME',
          userId: standardUser.id
        },
        // Device added notifications for standard user
        {
          message: 'New device "Luz Sala Principal" has been successfully added to your home network.',
          type: 'DEVICE_ADDED',
          userId: standardUser.id
        },
        {
          message: 'New device "Termostato Quarto" has been successfully added to your home network.',
          type: 'DEVICE_ADDED',
          userId: standardUser.id
        },
        {
          message: 'New device "Interruptor Cozinha" has been successfully added to your home network.',
          type: 'DEVICE_ADDED',
          userId: standardUser.id
        },
        {
          message: 'New device "Câmera Entrada" has been successfully added to your home network.',
          type: 'DEVICE_ADDED',
          userId: standardUser.id
        },
        // Critical notifications for standard user
        {
          message: 'CRITICAL: Temperature sensor in main room detected high temperature (28°C). Please check your HVAC system.',
          type: 'CRITICAL',
          userId: standardUser.id
        },
        {
          message: 'CRITICAL: Security camera "Câmera Entrada" detected unusual activity during nighttime hours.',
          type: 'CRITICAL',
          userId: standardUser.id
        },
        {
          message: 'System maintenance scheduled for tonight at 2:00 AM. Your devices may be briefly unavailable.',
          type: 'SYSTEM',
          userId: standardUser.id
        },
        // Some read notifications
        {
          message: 'Your smart home automation system has been successfully configured.',
          type: 'SYSTEM',
          userId: standardUser.id,
          read: true
        },
        // Admin notifications (but admin users don't see notifications on dashboard)
        {
          message: 'System Overview: 6 devices currently active across all users.',
          type: 'ADMIN',
          userId: adminUser.id
        }
      ]
    });

    // Logs do sistema
    await prisma.systemLog.createMany({
      data: [
        {
          type: 'INFO',
          message: 'Sistema Home Control Hub iniciado',
          source: 'SYSTEM'
        },
        {
          type: 'INFO',
          message: 'Usuário admin@smartHome (ADMIN) autenticado',
          source: 'AUTH'
        },
        {
          type: 'INFO',
          message: 'Usuário user@smartHome (STANDARD_USER) autenticado',
          source: 'AUTH'
        },
        {
          type: 'INFO',
          message: 'Dispositivo conectado: Luz Sala Principal (devices/sala/luz_principal)',
          source: 'DEVICE'
        },
        {
          type: 'INFO',
          message: 'Dispositivo conectado: Termostato Quarto (devices/quarto/termostato)',
          source: 'DEVICE'
        },
        {
          type: 'INFO',
          message: 'Dispositivo conectado: Câmera Entrada (devices/entrada/camera)',
          source: 'DEVICE'
        },
        {
          type: 'INFO',
          message: 'Regra de automação criada: Ligar luz ao anoitecer',
          source: 'SYSTEM'
        },
        {
          type: 'INFO',
          message: 'Total de dispositivos no sistema: 6',
          source: 'SYSTEM'
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
