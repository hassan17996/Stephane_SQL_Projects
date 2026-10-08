module.exports = (rows) => {
    return rows.map((row) => {

        const replaced = {};

        for (let key in row) {   // key = column name
            
            const camelCase = key.replace(/([-_][a-z])/ig, ($1) => {
                return $1.toUpperCase().replace('_', '');
            });

            replaced[camelCase] = row[key]; //ex: replaced.firstName = row.first_name;
        }

        return replaced;

    });
};