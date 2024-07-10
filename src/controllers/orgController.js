const Organisation = require('../models/orgModel');

exports.createOrg = async (req, res) => {
  const { name, description } = req.body;
  const { userId } = req.user;

  try {
    const newOrg = await Organisation.create({
      name,
      description,
      UserId: userId,
    });

    res.status(201).json({
      status: 'success',
      message: 'Organisation created successfully',
      data: {
        orgId: newOrg.orgId,
        name,
        description,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'Bad Request',
      message: 'Client error',
      statusCode: 400,
    });
  }
};
