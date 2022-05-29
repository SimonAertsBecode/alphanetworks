import { PropsWithChildren } from 'react';
import CommentCount from './CommentCount';

import { User } from '../utils/interface/userInterface';

interface Props<ObjectType> {
   objects: ObjectType[];
   properties: {
      [key: string]: keyof ObjectType;
   }[];
   navigation?(id: number, user?: User): void;
   children?: boolean;
}

const DisplayTable = <ObjectType extends { id: number }>(props: PropsWithChildren<Props<ObjectType>>) => {
   const { objects, properties, navigation, children } = props;

   const displayKeys = (tag: 'th' | 'td', object?: any): JSX.Element[] => {
      return properties.map((propertie) => {
         const { key } = propertie;
         const ChosenTag = `${tag}` as keyof JSX.IntrinsicElements;
         return <ChosenTag key={key as string}>{object ? object[key as string] : (key as string)}</ChosenTag>;
      });
   };

   return (
      <>
         <thead>
            <tr>{displayKeys('th')}</tr>
         </thead>
         <tbody>
            {objects.map((object: any) => {
               return (
                  <tr key={object.id} onClick={navigation ? () => navigation(object.id, object) : undefined}>
                     {displayKeys('td', object)}
                     {children ? <CommentCount postId={object.id} /> : null}
                  </tr>
               );
            })}
         </tbody>
      </>
   );
};

export default DisplayTable;
