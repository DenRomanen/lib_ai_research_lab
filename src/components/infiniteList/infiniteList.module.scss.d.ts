declare namespace InfiniteListModuleScssNamespace {
  export interface IInfiniteListModuleScss {
    root: string;
  }
}

declare const InfiniteListModuleScssModule: InfiniteListModuleScssNamespace.IInfiniteListModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InfiniteListModuleScssNamespace.IInfiniteListModuleScss;
};

export = InfiniteListModuleScssModule;
