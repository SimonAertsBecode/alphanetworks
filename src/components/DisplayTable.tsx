import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import {user} from '../utils/interface/userInterface'

interface Props<ObjectType> {
   objects: ObjectType[];
   properties: {
      [key: string]: keyof ObjectType;
   }[];
   navigation?(id : number, user? : user) : void
}

const DisplayTable = <ObjectType extends { id: number }>(  
   props: PropsWithChildren<Props<ObjectType>>
) => {
   const { objects, properties, navigation } = props;

   return (
      <>
         {objects.map((object : any) => {
            return (
               <tr key={object.id} onClick={navigation ? ()=>navigation(object.id) : undefined}>
                  {properties.map((propertie) => {
                     const { key } = propertie;
                     return <td key={key as string}>{object[key]}</td>;
                  })}
               </tr>
            );
         })}
      </>
   );
};

export default DisplayTable;
