/**
 * Automatyczna próba dodania brakujących zależności w React Hookach (useEffect, useCallback, useMemo).
 */
module.exports = function transformer(file, api) {
    const j = api.jscodeshift;
    const root = j(file.source);

    root.find(j.CallExpression, {
        callee: {
            type: 'Identifier',
            name: name => ['useEffect', 'useCallback', 'useMemo'].includes(name),
        },
    }).forEach(path => {
        const [callback, deps] = path.node.arguments;
        if (!callback || !deps || deps.type !== 'ArrayExpression') return;

        const used = new Set();

        j(callback)
            .find(j.Identifier)
            .forEach(p => {
                const name = p.node.name;
                if (
                    name !== path.node.callee.name &&
                    name !== 'React' &&
                    name !== 'undefined'
                ) {
                    used.add(name);
                }
            });

        const current = new Set(deps.elements.map(e => e?.name).filter(Boolean));

        used.forEach(name => {
            if (!current.has(name)) {
                deps.elements.push(j.identifier(name));
            }
        });
    });

    return root.toSource({ quote: 'single' });
};
