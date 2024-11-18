const Report = require('../models/Report');

// // Create a new report
const addReport = async (req, res) => {

    try {
        const { dishId, report } = req.body;
        const newReport = new Report({
            dishId,
            report
        });
        console.log("New report", newReport);

        const savedReport = await newReport.save();
        res.status(201).json({ success: true, message: "Dish created", savedReport });

    } catch (error) {
        console.log("Error creating dish:", error);
        res.status(500).json({ success: false, message: "internal server error" });

    }
};
// // Read all reports
const getAll = async (req, res) => {
    try {
        const reports = await Report.find({});
        console.log(reports);
        res.status(200).json({ success: true, reports });
    } catch (error) {
        // console.error('Error fetching dishes:', error);
        res.status(500).json({ success: false, message: "internal server error" });
    }
};

// // Read a specific report 
const getReportById = async (req, res) => {

    try {
        const { id: dishId } = req.params;
        console.log(dishId);
        const report = await Report.findOne({ dishId });
        if (!report) {
            return res.status(404).json({ success: false, message: "report not found" });

        }
        res.status(200).json({ success: true, report });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// // Update a report
const updateReport = async (req, res) => {
    const id = req.params.id;
    console.log(id)

    try {
        const report = await Rotel.findByIdAndUpdate(id);
        if (!report) {
            return res.status(404).json({ success: false, message: 'report not found' });
        }
        res.status(200).json({ success: true, message: 'report updated', report });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });

    }
};

// // Delete a report
const removeReport = async (req, res) => {
    const { id } = req.params;
    try {
        const report = await Report.findByIdAndDelete(id);
        if (!report) {
            return res.status(404).json({ message: 'report not found' });
        }
        res.json({ message: 'report deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { addReport, getAll, getReportById, updateReport, removeReport };