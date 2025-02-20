declare type PageProps<Param = {}> = {
  params: { locale: string } & Param;
};

// For CSS
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
