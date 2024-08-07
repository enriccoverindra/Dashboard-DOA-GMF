const mmService = require('../services/mm.services');


async function login(req,res){
    try{
        const result = await mmService.login(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function addAccount(req,res){
    try{
        const result = await mmService.addAccount(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function showAccount(req,res){
    try{
        const result = await mmService.showAccount(req.body);
        res.json(result);
    }catch(err){
        res.json(err);
    }
}

async function showAllAccount(req,res){
    try{
        const result = await mmService.showAllAccount(req.body);
        res.json(result);
    }catch(err){
        res.json(err);
    }
}

async function updatePassword(req,res){
    try{
        const result = await mmService.updatePassword(req.body);
        res.json(result);
    }catch(err){
        res.json(err);
    }
}

async function deleteAccount(req,res){
    try{
        const result = await mmService.deleteAccount(req.body);
        res.json(result);
    }catch(err){
        res.json(err);
    }
}

async function addAuditPlan(req,res){
    try{
        const result = await mmService.addAuditPlan(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function deleteAuditPlan(req,res){
    try{
        const result = await mmService.deleteAuditPlan(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function UpdateAuditPlan(req,res){
    try{
        const result = await mmService.UpdateAuditPlan(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function showAuditPlanACC(req,res){
    try{
        const result = await mmService.showAuditPlanACC(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function addAPdetail(req,res){
    try{
        const result = await mmService.addAPdetail(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function showAPdetail(req,res){
    try{
        const result = await mmService.showAPdetail(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function UpdateAPdetail(req,res){
    try{
        const result = await mmService.UpdateAPdetail(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function addIssuence(req,res){
    try{
        const result = await mmService.addIssuence(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function UpdateaddIssuence(req,res){
    try{
        const result = await mmService.UpdateaddIssuence(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function showissuence(req,res){
    try{
        const result = await mmService.showissuence(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}


async function addOccurrence(req, res) {
    try {
        console.log("Adding IOR");
        const result = await mmService.addOccurrence(req.body);
        res.status(200).json({ message: 'IOR Successfully Added', result: result });
    } catch (err) {
        res.status(500).json({ message: 'Error in sending file', error: err.detail });
    }
}

async function showOccurrence(req,res){
    try{
        const result = await mmService.showOccurrence(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function updateOccurrence(req,res){
    try{
        const result = await mmService.updateOccurrence(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function deleteOccurrence(req,res){
    try{
        const result = await mmService.deleteOccurrence(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function addCategoryIOR(req,res){
    try{
        const result = await mmService.addCategoryIOR(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function addFollowUpOccurrence(req,res){
    try{
        const result = await mmService.addFollowUpOccurrence(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function addNCRInit(req,res){
    try{
        const result = await mmService.addNCRInit(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function getPDF(req, res) {
    try {
        const result = await mmService.getPDF(req.body);
        if (result.success) {
            res.download(result.path, `${req.body.documentId}.pdf`, (err) => {
                if (err) {
                    console.error('Error in sending file:', err);
                    res.status(500).send('Error in sending file');
                }
            });
        } else {
            res.status(500).send(result.message);
        }
    } catch (err) {
        res.status(500).send(err.message || 'An unexpected error occurred');
    }
}

async function getPDFDrive(req, res) {
    try {
        const result = await mmService.getPDFDrive(req.body);

        if (result.success) {
            res.status(200).json({
                status: 200,
                message: result.message // Ensure result.message contains the file link
            });
        } else {
            // For non-200 cases that are not necessarily errors
            res.status(200).json({
                status: 200,
                message: result.message
            });
        }
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message || 'An unexpected error occurred'
        });
    }
}

async function deleteNCRInit(req,res){
    try{
        const result = await mmService.deleteNCRInit(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function UpdateNCRInit(req,res){
    try{
        const result = await mmService.UpdateNCRInit(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function showNCRInit(req,res){
    try{
        const result = await mmService.showNCRInit(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}


async function searchNCR(req,res){
    try{
        const result = await mmService.searchNCR(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function showNCRInit_ID(req,res){
    try{
        const result = await mmService.showNCRInit_ID(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}


async function addNCRReply(req,res){
    try{
        const result = await mmService.addNCRReply(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function deleteNCRReply(req,res){
    try{
        const result = await mmService.deleteNCRReply(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function UpdateNCRReply(req,res){
    try{
        const result = await mmService.UpdateNCRReply(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function showNCRReply(req,res){
    try{
        const result = await mmService.showNCRReply(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function addNCRFollowResult(req,res){
    try{
        const result = await mmService.addNCRFollowResult(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function deleteNCRFollowResult(req,res){
    try{
        const result = await mmService.deleteNCRFollowResult(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function UpdateNCRFollowResult(req,res){
    try{
        const result = await mmService.UpdateNCRFollowResult(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function showNCRFollowResult(req,res){
    try{
        const result = await mmService.showNCRFollowResult(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function updateFollowUpOccurrence(req,res){
    try{
        const result = await mmService.updateFollowUpOccurrence(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function showFollupOccurrence(req,res){
    try{
        const result = await mmService.showFollupOccurrence(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function showFollupOccurrenceID(req,res){
    try{
        const result = await mmService.showFollupOccurrenceID(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function showOccurrenceAll(req,res){
    try{
        const result = await mmService.showOccurrenceAll(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function searchIOR(req,res){
    try{
        const result = await mmService.searchIOR(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

module.exports = {
    login,
    addAccount,
    showAccount,
    deleteAccount,
    addAuditPlan,
    deleteAuditPlan,
    UpdateAuditPlan,
    showAuditPlanACC,
    addAPdetail,
    showAPdetail,
    UpdateAPdetail,
    addIssuence,
    addOccurrence,
    UpdateaddIssuence,
    showissuence,
    showOccurrence,
    updateOccurrence,
    deleteOccurrence,
    addCategoryIOR,
    addFollowUpOccurrence,
    addNCRInit,
    deleteNCRInit,
    showNCRInit,
    searchNCR,
    UpdateNCRInit,
    addNCRReply,
    deleteNCRReply,
    UpdateNCRReply,
    getPDF,
    getPDFDrive,
    showNCRReply,
    addNCRFollowResult,
    deleteNCRFollowResult,
    UpdateNCRFollowResult,
    showNCRFollowResult,
    showNCRInit_ID,
    showAllAccount,
    updatePassword,
    updateFollowUpOccurrence,
    showFollupOccurrence,
    showFollupOccurrenceID,
    showOccurrenceAll,
    searchIOR
};