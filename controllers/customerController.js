const customer = require('../models/customer');
const addCustomer = async (req, res) => {
    const { country, name, address, category, phone, website, notesForTheWaiterTeam, role } = req.body;
    const newCustomer = new customer({
        country,
        name,
        address,
        category,
        phone,
        website,
        notesForTheWaiterTeam,
        role
    });
    const savedCustomer = await newCustomer.save();
    res.status(201).json({ success: true, message: "customer created", savedCustomer });
}
const getCustomer = async (req, res) => {
    try {
        const customer = await customer.find({})
        res.status(200).json({ success: true, message: "customer found", customer })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });

    }
}

module.exports = { addCustomer, getCustomer, };