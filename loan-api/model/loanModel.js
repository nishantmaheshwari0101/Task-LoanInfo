const mongoose = require('mongoose')

const personalrecordschema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            require: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            require: true
        }
    },
    bankDetails: {
        bankName: {
            type: String,
            required: true
        },
        accountNumber: {
            type: String,
            required: true
        },
        IRFCCode: {
            type: String,
            required: true
        }
    },
    loanAmount: {
        type: Number,
        required: true
    },
    installments: {
        type: Number,
        required: true
    },
    totalLoanDuration: {
        type: Number,
        required: true
    },
    interestRate: {
        type: Number,
        required: true
    },
    loanStartDate : {
        month: {
            type: Date,
            required: true
        },
        year: {
            type: Date,
            required: true
        }
    }



})

module.exports = mongoose.model("Loan", personalrecordschema)