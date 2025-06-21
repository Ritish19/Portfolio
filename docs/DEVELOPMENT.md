# Development Guidelines

## Code Standards

### TypeScript
- Use strict TypeScript configuration
- Prefer interface over type for object shapes
- Use proper type annotations for all function parameters and return types
- Utilize utility types where appropriate

### React Best Practices
- Use functional components with hooks
- Implement proper error boundaries
- Follow the principle of composition over inheritance
- Use React.memo for performance optimization when needed

### Component Structure
```typescript
// ComponentName.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ComponentNameProps {
  // Props interface
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  // Props destructuring
}) => {
  // Hooks
  // Event handlers
  // Render logic
  
  return (
    <motion.div
      className={cn(
        "base-classes",
        "conditional-classes"
      )}
      // Motion props
    >
      {/* Component content */}
    </motion.div>
  );
};
```

### Styling Guidelines
- Use Tailwind CSS utility classes
- Create custom components for repeated patterns
- Follow mobile-first responsive design
- Use CSS variables for theme consistency

### State Management
- Use local state (useState) for component-specific state
- Use Zustand for global application state
- Use React Query for server state management
- Keep state as close to where it's used as possible

### Performance Guidelines
- Implement code splitting at route level
- Use React.lazy for component-level code splitting
- Optimize images with proper formats and lazy loading
- Use React.memo and useMemo appropriately
- Implement virtual scrolling for large lists

### Accessibility
- Use semantic HTML elements
- Implement proper ARIA labels
- Ensure keyboard navigation support
- Maintain proper color contrast ratios
- Test with screen readers

### Testing Strategy
- Write unit tests for utility functions
- Test component behavior, not implementation
- Use integration tests for user workflows
- Implement visual regression tests for UI components

### Git Workflow
- Use conventional commits
- Create feature branches for new development
- Squash commits before merging
- Write descriptive commit messages

### Code Review Checklist
- [ ] Code follows established patterns
- [ ] TypeScript types are properly defined
- [ ] Components are properly tested
- [ ] Accessibility requirements are met
- [ ] Performance considerations are addressed
- [ ] Mobile responsiveness is implemented
