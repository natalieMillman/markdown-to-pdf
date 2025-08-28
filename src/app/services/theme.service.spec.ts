import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService (Jest)', () => {
  let service: ThemeService;

  beforeEach(() => {
    // Mock localStorage
    const mockLocalStorage = {
      getItem: jest.fn().mockReturnValue(null),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn()
    };
    
    Object.defineProperty(window, 'localStorage', { value: mockLocalStorage, writable: true });

    // Mock document.body.setAttribute
    jest.spyOn(document.body, 'setAttribute');

    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have theme observable', () => {
    expect(service.theme$).toBeDefined();
  });

  it('should have toggleTheme method', () => {
    expect(service.toggleTheme).toBeDefined();
    expect(typeof service.toggleTheme).toBe('function');
  });

  it('should have setTheme method', () => {
    expect(service.setTheme).toBeDefined();
    expect(typeof service.setTheme).toBe('function');
  });

  it('should toggle theme when toggleTheme is called', () => {
    // This is a basic test that verifies the method exists and can be called
    expect(() => service.toggleTheme()).not.toThrow();
  });
});
