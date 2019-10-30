const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNew = employers.filter(function(el) {
    return el != '';
});

const employersNames = employersNew.map(function(item) {
    item = item.toLowerCase().trim();
    return (item);
});

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0) {
    let {cash} = sponsors;
    let everyCash = cash;
    let total = own;
    everyCash.forEach((elem) => {
        total += elem;
    })
    return total;
}

const money = calcCash();

function makeBusiness(owner, director = 'Victor', cash, emp) {
    let {eu, rus} = sponsors;
    let sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', , money, employersNames]);