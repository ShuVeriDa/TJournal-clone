import React, {ReactNode} from 'react';
import clsx from 'clsx';
import {LeftMenu} from '../components/LeftMenu/LeftMenu';
import {SideComments} from '../components/SideComments/SideComments';
import {Header} from "../components/Header/Header";

interface MainLayoutProps {
   hideComments?: boolean;
   contentFullWidth?: boolean;
   hideMenu?: boolean
   className?: string;
   children: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = (
   {
      children,
      contentFullWidth,
      hideComments,
      className,
      hideMenu
   }) => {
   return (
      <div className={clsx('wrapper', className)}>
         {!hideMenu && <div className="leftSide">
            <LeftMenu/>
         </div>}
         <div className={clsx('content', {'content--full': contentFullWidth})}>{children}</div>
         {!hideComments && (
            <div className="rightSide">
               <SideComments/>
            </div>
         )}
      </div>
   );
};
