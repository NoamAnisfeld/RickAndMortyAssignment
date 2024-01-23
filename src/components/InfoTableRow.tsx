type DataObject = Record<string, any>

interface InfoTableRowProps<T extends DataObject> {
    dataObject: T,
    field: keyof T & keyof DataObject,
    label?: string,
    showIfEmpty?: boolean,
}

export default function InfoTableRow<T extends DataObject>({
    dataObject,
    field,
    label = field,
    showIfEmpty = false,
}: InfoTableRowProps<T>) {

    const data = String(dataObject[field]);

    if (data === '' && !showIfEmpty || !(Object.hasOwn(dataObject, field))) {
        return undefined;
    }

    return (
        <tr>
            <th>{label}</th>
            <td>{data}</td>
        </tr>
    );
}