# UI Components Organization

This document describes the reorganized structure of the UI components and their corresponding styles.

## Directory Structure

```
src/ui/src/components/
├── Dashboard.tsx
├── FAQ.tsx
├── Login.tsx
├── Profile.tsx
├── Register.tsx
├── Support.tsx
└── styles/
    ├── Common.styles.ts      # Shared styles across components
    ├── Dashboard.styles.ts   # Dashboard-specific styles
    ├── FAQ.styles.ts         # FAQ-specific styles
    ├── Login.styles.ts       # Login-specific styles
    ├── Profile.styles.ts     # Profile-specific styles
    ├── Register.styles.ts    # Register-specific styles
    └── Support.styles.ts     # Support-specific styles
```

## Organization Principles

### 1. **Separation of Concerns**
- Each page/component now has its own dedicated style file
- Common styles used across multiple components are centralized in `Common.styles.ts`

### 2. **File Naming Convention**
- Component files: `ComponentName.tsx`
- Style files: `ComponentName.styles.ts`
- Common styles: `Common.styles.ts`

### 3. **Import Structure**
All components now follow this import pattern:
```typescript
// Common styles (header, navigation, layout)
import {
  Container,
  Header,
  HeaderLeft,
  AppTitle,
  HouseIcon,
  HeaderNav,
  NavItem,
  LogoutButton,
  MainContent,
  PageTitle,
} from "./styles/Common.styles";

// Component-specific styles
import {
  ComponentSpecificStyle1,
  ComponentSpecificStyle2,
  // ...
} from "./styles/ComponentName.styles";
```

## Common Styles (`Common.styles.ts`)

Contains shared styled components used across multiple pages:
- `Container`: Main page wrapper
- `Header`: Navigation header
- `HeaderLeft`: Left section of header (logo and title)
- `AppTitle`: Application title
- `HouseIcon`: House emoji icon
- `HeaderNav`: Navigation menu container
- `NavItem`: Navigation menu items
- `LogoutButton`: Logout button
- `MainContent`: Main content area
- `PageTitle`: Centered page titles

## Component-Specific Styles

### Dashboard.styles.ts
- Table components for device management
- Action buttons and controls
- Dashboard-specific layouts

### FAQ.styles.ts
- Collapsible FAQ items
- Question/answer styling
- Accordion animations

### Support.styles.ts
- Form components for support tickets
- Input field styling
- File upload components

### Login.styles.ts & Register.styles.ts
- Authentication form layouts
- Input fields with validation
- Split-screen layouts

### Profile.styles.ts
- User information tables
- Profile editing forms
- Password management components

## Benefits of This Organization

1. **Maintainability**: Each component's styles are clearly separated and easy to find
2. **Reusability**: Common styles are centralized and can be easily updated
3. **Scalability**: New components can follow the same pattern
4. **Consistency**: Shared styles ensure visual consistency across the application
5. **Developer Experience**: Clear file structure makes it easier for developers to locate and modify styles

## Development Guidelines

When creating new components:
1. Create the component file: `ComponentName.tsx`
2. Create the corresponding style file: `ComponentName.styles.ts`
3. Import common styles from `Common.styles.ts` for consistent header/navigation
4. Define component-specific styles in the dedicated style file
5. Follow the established naming conventions

When modifying existing components:
1. Check if the style is shared (modify `Common.styles.ts`)
2. If component-specific, modify the appropriate `ComponentName.styles.ts`
3. Ensure imports are updated to use the new structure
