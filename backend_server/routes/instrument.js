const express = require("express");
const instrumentRouter = express.Router();
const Instrument = require("../models/instrument");
const DEBUG = require('../main');

instrumentRouter.route("/")
    .get(async (_, res, next) => {
        if (DEBUG) console.log('\n********** get ********** \nCalled without params...');
        Instrument.find((err, data) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            if (DEBUG) console.log('---------------------- Returning data\n', data);
            return res.status(200).json(data);
        }).sort({ RecDt: 1 });
    })

    .post(async (req, res, next) => {
        if (DEBUG) {
            console.log(`\n********** post **********`);
            for (const prop in req) if (["params", "query", "body"].includes(prop))
                console.log(`---------------------- ${prop}\n`, req[prop]);
        }
        const newInstrument = new Instrument(req.body);
        newInstrument.save((err, data) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            if (DEBUG) console.log('---------------------- Returning data\n', data);
            return res.status(201).send(data);
        });
    });

instrumentRouter.route("/id/:id")
    .get(async (req, res, next) => {
        if (DEBUG) {
            console.log(`\n********** get (with id params) **********`);
            for (const prop in req) if (["params", "query", "body"].includes(prop))
                console.log(`---------------------- ${prop}\n`, req[prop]);
        }
        Instrument.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            if (DEBUG) console.log('---------------------- Returning data\n', data);
            return res.status(200).json(data);
        });
    })

    .put(async (req, res) => {
        if (DEBUG) {
            console.log(`\n********** app.put **********`);
            for (const prop in req) if (["params", "query", "body"].includes(prop))
                console.log(`---------------------- ${prop}\n`, req[prop]);
        };
        Instrument.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            (err, data) => {
                if (err) {
                    res.status(500);
                    return next(err);
                };
                if (DEBUG) console.log('---------------------- Returning data\n', data);
                return res.status(200).json(data);
            }
        );
    })

    .delete(async (req, res, next) => {
        if (DEBUG) {
            console.log(`\n********** app.delete **********`);
            for (const prop in req) if (["params", "query", "body"].includes(prop))
                console.log(`---------------------- ${prop}\n`, req[prop]);
        };
        Instrument.findOneAndDelete({ _id: req.params.id }, (err) => {
            if (err) {
                res.status(500);
                return next(err);
            };
        });
        Instrument.find((err, data) => {
            if (err) {
                res.status(500);
                return next(err);
            };
            if (DEBUG) console.log('---------------------- Returning data\n', data);
            return res.status(200).json(data);
        }).sort({ RecDt: 1 });
    });

instrumentRouter.route("/search").get(async (req, res, next) => {
    if (DEBUG) {
        console.log(`\n********** app.get (with search query) **********`);
        for (const prop in req) if (["params", "query", "body"].includes(prop))
            console.log(`---------------------- ${prop}\n`, req[prop]);
    };
    Instrument.find(req.query, (err, data) => {
        if (err) {
            res.status(500);
            return next(err);
        };
        if (DEBUG) console.log('---------------------- Returning data\n', data);
        return res.status(200).json(data);
    }).sort({ RecDt: 1 });
});

module.exports = instrumentRouter;