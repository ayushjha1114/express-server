import { permissions } from '../constants';
export default function hasPermission(
    moduleName: string,
    role: string,
    permissionType: string,
): boolean {
   if (permissions.hasOwnProperty(moduleName)) {
        // console.log('inside module')
        if (permissions[moduleName]['all' as string].includes(role)) {
            return true;
        } else {
            const result: boolean = permissions[moduleName][permissionType].includes(role);
            return result;
        }
    } else {
        return false;
    }
}
// hasPermission( 'getUsers','head-trainer', 'read');
// hasPermission( 'getUsers1','trainer', 'write');
// hasPermission( 'getUsers5','trainer', 'delete');
