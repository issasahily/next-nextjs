(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 790:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__HjAUt"
};


/***/ }),

/***/ 2865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(790);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js



const MeetupDetail = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetupDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: "Meetup image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                children: [
                    " ",
                    props.title
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.id
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: props.adress
            })
        ]
    });
};
/* harmony default export */ const meetups_MeetupDetail = (MeetupDetail);

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js





const DetailPage = (props)=>{
    const idPage = (0,router_.useRouter)();
    const myid = idPage.query.meetupId;
    // const { image, title, address, description } = props.selectedMeetup;
    // const id = props.selectedMeetup._id.toString();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupDetail, {
                image: props.image,
                description: props.description,
                id: props.id,
                title: props.title,
                adress: props.address
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            " Meetup Detail",
                            props.title
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: props.description
                    })
                ]
            })
        ]
    });
};
{
/* <img
src="https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"
alt="Meetup image"
/>
<p>description</p>
<h2> "'meetup data '"</h2>
<h1>{props.id}</h1> */ }async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://issa:issayoussef@cluster0.p9ekjvo.mongodb.net/meetup?retryWrites=true&w=majority");
    const db = client.db();
    const getMeetup = db.collection("mymeetup");
    const meetup = await getMeetup.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: true,
        paths: meetup.map((meet)=>{
            return {
                params: {
                    meetupId: meet._id.toString()
                }
            };
        })
    };
}
async function getStaticProps(context) {
    const myid = context.params.meetupId;
    console.log(myid);
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://issa:issayoussef@cluster0.p9ekjvo.mongodb.net/meetup?retryWrites=true&w=majority");
    const db = client.db();
    const getMeetup = db.collection("mymeetup");
    const selectedMeetup = await getMeetup.findOne({
        _id: new external_mongodb_.ObjectId(myid)
    });
    client.close();
    return {
        props: {
            id: selectedMeetup._id.toString(),
            image: selectedMeetup.image,
            title: selectedMeetup.title,
            description: selectedMeetup.description,
            adress: selectedMeetup.address
        }
    };
}
/* harmony default export */ const _meetupId_ = (DetailPage);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2865));
module.exports = __webpack_exports__;

})();