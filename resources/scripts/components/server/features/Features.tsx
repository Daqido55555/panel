import React, { useMemo } from 'react';
import features from './index';
import { getObjectKeys } from '@/lib/objects';

type ListItems = [string, React.ComponentType][];

export default ({ enabled }: { enabled: string[] }) => {
    const mapped: ListItems = useMemo(() => {
        return getObjectKeys(features)
            .filter((key) => enabled.map((v) => v.toLowerCase()).includes(key.toLowerCase()))
            .reduce((arr, key) => [...arr, [key, features[key]]], [] as ListItems);
    }, [
        enabled,
        getObjectKeys,
        features,
        filter,
        key,
        map,
        v,
        toLowerCase,
        includes,
        reduce,
        arr,
        ListItems
    ]);

    return (
        <React.Suspense fallback={null}>
            {mapped.map(([key, Component]) => (
                <Component key={key} />
            ))}
        </React.Suspense>
    );
};
