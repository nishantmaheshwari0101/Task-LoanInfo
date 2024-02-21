const Loan = require("../model/loanModel")

const getAllLoans = async (req, res) => {
    const allLoans = await Loan.find();
    if (!allLoans) {
        res.json({ error: "no loan holder here" })
    }
    res.json(allLoans)
}

const getLoanHolders = async (req, res) => {

    const singleLoan = await Loan.findById(req.params.id)
    if (!singleLoan) {
        res.status(404).json({ error: "error in finding single loan" })
    }
    res.json(singleLoan)
}

const createLoanholder = async (req, res) => {
    const { firstName, lastName, dateOfBirth, contact, Email, loanAmount, installments, totalLoanDuration, interestRate } = req.body
    const { street, city, state, postalCode, country } = req.body
    const address = {
        street: street,
        city: city,
        state: state,
        postalCode: postalCode,
        country: country
    }
    const { bankName, accountNumber, IRFCCode } = req.body
    const bankDetails =
    {
        bankName: bankName,
        accountNumber: accountNumber,
        IRFCCode: IRFCCode,
    }
    const { month, year } = req.body
    const loanStartDate = {
        month: month,
        year: year
    }

    if (!firstName || !lastName || !dateOfBirth || !contact || !Email || !loanAmount || !installments || !totalLoanDuration || !interestRate || !street ||
        !city || !state || !postalCode || !country || !bankName || !accountNumber || !IRFCCode || !month || !year) {
        res.json({ error: "please fill all details" })
    }

    const newLoanHolder = await Loan.create([{
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        contact: contact,
        Email: Email,
        bankDetails,
        address,
        loanStartDate,
        installments: installments,
        loanAmount: loanAmount,
        totalLoanDuration: totalLoanDuration,
        interestRate: interestRate,

    }])

    if (newLoanHolder) {
        res.status(201).json(newLoanHolder)
    }
}

module.exports = { getAllLoans, getLoanHolders, createLoanholder }