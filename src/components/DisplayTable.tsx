//**Components import */
import CommentCount from './CommentCount';

//**Utils import */
import { firstLetterUppercase } from '../utils/strings/stringManipulation';

interface Props<ObjectType> {
   objects: ObjectType[];
   properties: {
      key: keyof ObjectType;
   }[];
   navigation?(id: number, item?: {}): void;
   children?: boolean;
}

const DisplayTable = <ObjectType extends { id: number }>(props: Props<ObjectType>) => {
   const { objects, properties, navigation, children } = props;

   const displayKeys = (tag: 'th' | 'td', object?: ObjectType): JSX.Element[] => {
      return properties.map((propertie) => {
         const { key } = propertie;
         const ChosenTag = `${tag}` as keyof JSX.IntrinsicElements;
         return (
            <ChosenTag key={key as string}>
               <>{object ? object[key] : firstLetterUppercase(key as string)}</>
            </ChosenTag>
         );
      });
   };

   return (
      <>
         <thead>
            <tr>{displayKeys('th')}</tr>
         </thead>
         <tbody>
            {objects.map((object) => {
               return (
                  <tr key={object.id} onClick={navigation ? () => navigation(object.id, object) : undefined}>
                     {displayKeys('td', object)}
                     {children && <CommentCount postId={object.id} />}
                  </tr>
               );
            })}
         </tbody>
      </>
   );
};

export default DisplayTable;
