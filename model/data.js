import mongoose from "mongoose";

const DataModal = mongoose.Schema({
  SNO: {
    type: Number,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  doj: {
    type: String,
    required: true,
  },
  pay: {
    type: Number,
    required: true,
  },
  gradePay: {
    type: Number,
    required: true,
  },
  da: {
    type: Number,
    required: true,
  },
  hra: {
    type: Number,
    required: true,
  },
  otherAllow: {
    type: Number,
    required: true,
  },
  totalEarnings: {
    type: Number,
    required: true,
  },
  leaveOnLossOfPay: {
    type: Number,
    required: true,
  },
  professionalTax: {
    type: Number,
    required: true,
  },
  tds: {
    type: Number,
    required: true,
  },
  othersDeduction: {
    type: Number,
    required: true,
  },
  totalDeduction: {
    type: Number,
    required: true,
  },
  netAmount: {
    type: Number,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const Data = mongoose.model("Data", DataModal);
export default Data;
