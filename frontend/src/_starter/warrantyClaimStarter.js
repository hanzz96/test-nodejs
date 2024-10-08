export const warrantyClaimStarter = [
    {
        _id: 1,
        product: {
            _id: 1,
            name: 'Comverges',
            serialNumber: 'c5576a21-3bf6-4f25-80e4-99984bb7e2c6',
            warrantyPeriodDays: 30,
            createdAt: "2019-09-10T09:11:44.543Z",
        },
        serialNumber: 'c5576a21-3bf6-4f25-80e4-99984bb7e2c6',
        status: 'pending',
        customer: {
            _id: 1,
            name: 'Customer 1',
            role: 'CUSTOMER',
        },
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        createdAt: "2019-09-15T09:11:44.543Z",
        approvedAt: null,
        approvedBy: null
    },
    {
        _id: 2,
        product: {
            _id: 2,
            name: 'Xsports',
            serialNumber: '814f7980-f033-4ac8-80c5-a598164d0b13',
            warrantyPeriodDays: 30,
            createdAt: "2019-08-10T09:11:44.543Z",
        },
        serialNumber: '814f7980-f033-4ac8-80c5-a598164d0b13',
        status: 'pending',
        customer: {
            _id: 2,
            name: 'Customer 2',
            role: 'CUSTOMER',
        },
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        createdAt: "2024-09-15T11:34:11.543Z",
        approvedAt: null,
        approvedBy: null
    }
]   