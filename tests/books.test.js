const cds = require('@sap/cds/lib')

const { GET, expect } = cds.test(__dirname+'/..')


describe('CAP Test Suite', () => {

    it('should test', async () => { // Jest & Mocha style
        const { data } = await GET('/Books/Books', {
            params: { $search: 'Hotel', $select: `Title` }
        })
        expect(data.value).to.containSubset([{ ID: "aba910b1-a7a9-43b9-8102-bf01b3b61faf" }])
    })
})
