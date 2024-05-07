declare namespace MyButtonModuleScssNamespace {
  export interface IMyButtonModuleScss {
    myButton: string;
  }
}

declare const MyButtonModuleScssModule: MyButtonModuleScssNamespace.IMyButtonModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MyButtonModuleScssNamespace.IMyButtonModuleScss;
};

export = MyButtonModuleScssModule;
