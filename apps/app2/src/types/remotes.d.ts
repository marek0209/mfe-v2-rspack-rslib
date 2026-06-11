declare module 'app1/DataTable' {
  export interface DataTableRemoteProps {
    title?: string;
  }

  const DataTableRemote: React.ComponentType<DataTableRemoteProps>;
  export default DataTableRemote;
}
