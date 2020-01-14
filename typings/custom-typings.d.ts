// https://github.com/facebook/create-react-app/blob/f09d3d3a52c1b938cecc977c2bbc0942ea0a7e70/packages/react-scripts/lib/react-app.d.ts#L42-L49
// declare module '*.svg' {
//   import * as React from 'react';

//   export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

//   const src: string;
//   export default src;
// }

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module '*.json' {
  const value: any;
  export const version: string;
  export default value;
}

declare module 'pui';
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
