declare module "minimatch" {
    export interface IOptions {
      [key: string]: unknown;
    }
  
    export interface IMinimatch {
      pattern: string;
      options: IOptions;
      match(path: string): boolean;
    }
  
    export interface IMinimatchStatic {
      (path: string, pattern: string, options?: IOptions): boolean;
      Minimatch: new (pattern: string, options?: IOptions) => IMinimatch;
      match(list: string[], pattern: string, options?: IOptions): string[];
      filter(pattern: string, options?: IOptions): (path: string) => boolean;
    }
  
    const minimatch: IMinimatchStatic;
    export = minimatch;
  }
  