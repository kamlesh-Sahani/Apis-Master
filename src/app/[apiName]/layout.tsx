import type { Metadata } from 'next';
import { generateMetadata } from './generateMetaData';
export { generateMetadata };
const Layout = ({children}:{children:React.ReactNode})=>{
    return<>
    {children}
    </>
}

export default Layout;