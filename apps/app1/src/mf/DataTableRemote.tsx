import { DataTable, type DataTableRow } from '@my-org/components';

export interface DataTableRemoteProps {
  title?: string;
}

const defaultRows: DataTableRow[] = [
  { id: '1', name: 'Order #1001', status: 'Shipped' },
  { id: '2', name: 'Order #1002', status: 'Processing' },
  { id: '3', name: 'Order #1003', status: 'Delivered' },
];

export default function DataTableRemote({
  title = 'App 1 Orders',
}: DataTableRemoteProps): React.ReactElement {
  return <DataTable title={title} rows={defaultRows} />;
}
