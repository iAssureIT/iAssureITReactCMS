const express = require('express');
const app = express();
const morgan = require('morgan');// morgan call next function if problem occure
const bodyParser = require('body-parser');// this package use to formate json data 
const mongoose = require ('mongoose');
var nodeMailer = require('nodemailer');
const globalVariable = require("./nodemon.js");

// Routes - Core Admin
// const userRoutes 					= require('./api/coreAdmin/routes/users.js');
// const rolesRoutes					= require('./api/coreAdmin/routes/roles.js');
/*const masternotificationRoutes      = require('./api/coreAdmin/notificationManagement/RoutesMasterNotification.js');
const notificationRoutes		    = require('./api/coreAdmin/notificationManagement/RoutesNotification.js');*/
// const companysettingsRoutes			= require('./api/coreAdmin/routes/companysettings.js');
// const projectSettingRoutes 			    = require('./coreAdmin/projectSettings/RoutesProjectSettings.js');

const systemSecurityRoutes 				= require('./coreAdmin/systemSecurity/RoutesSystemSecurity.js');
const userRoutes 						= require('./coreAdmin/userManagement/RoutesUsers.js');
const rolesRoutes						= require('./coreAdmin/rolesManagement/RoutesRoles.js');
const rolesentitymasterRoutes			= require('./coreAdmin/RoleEntityMaster/Routes.js');
const masternotificationRoutes			= require('./coreAdmin/notificationManagement/RoutesMasterNotification.js');
const notificationRoutes				= require('./coreAdmin/notificationManagement/RoutesNotification.js');
const companySettingsRoutes				= require('./coreAdmin/companySettings/RoutesCompanySettings.js');
const projectSettingRoutes 				= require('./coreAdmin/projectSettings/RoutesProjectSettings.js');
const globalMasterRoutes 				= require('./coreAdmin/globalMaster/RoutesGlobalMaster.js');
const preferencesRoutes 				= require('./coreAdmin/preferences/RoutesPreferences.js');
const paymentgatewayRoutes 				= require('./coreAdmin/paymentgateway/Routes.js');

// Routes - CMS
const blockRoutes 					= require('./cms/blocks/routes.js');
const pageRoutes 					= require('./cms/pages/routes.js');
const SectionRoutes			 		= require("./cms/sections/Routes.js"); 

const blogRoutes 					= require('./cms/blogs/routes.js');
const typeMasterRoutes 					= require('./cms/TypeMaster/Routes.js');
const blockTypeMasterRoutes 					= require('./cms/BlockTypeMaster/Routes.js');
// Routers - IOG


// global.JWT_KEY = "secret";

mongoose.connect('mongodb://localhost/'+globalVariable.dbname,{
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
mongoose.promise = global.Promise;

global.titleCase = function(Str){
    return new Promise(function(resolve,reject){
        resolve(Str.charAt(0).toUpperCase()+Str.slice(1));
    });
}

app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		return res.status(200).json({});
	}
	next();
});

//URL's collection wise
//coreAdmin

app.use("/api/roles", rolesRoutes);
app.use('/api/projectsettings',projectSettingRoutes);
app.use("/api/auth", systemSecurityRoutes);
app.use("/api/users", userRoutes);
app.use("/api/masternotifications",masternotificationRoutes);
app.use('/api/notifications',notificationRoutes);
app.use('/api/companysettings',companySettingsRoutes);
app.use('/api/globalmaster',globalMasterRoutes);
app.use('/api/preferences',preferencesRoutes);
// app.use("/api/entitymaster", entityRoutes);
/*
app.use("/api/packagetypemaster", packageTypeMasterRoutes);
app.use("/api/packagenamemaster", packageNameMasterRoutes);

app.use("/api/paymentgateway", paymentgatewayRoutes);

app.use("/api/packagemaster", packageMasterRoutes);

app.use("/api/packagemasterbulk", packageMasterBulkRoutes);
app.use("/api/categorymaster", categoryMasterRoutes);
app.use("/api/brandmaster", brandMasterRoutes);
app.use("/api/citytypemaster", cityTypeRoutes);
app.use("/api/documententitymaster", documententitymasterRoutes);*/
app.use("/api/rolesentitymaster", rolesentitymasterRoutes);


//CMS
app.use("/api/blocks",blockRoutes);
app.use("/api/pages",pageRoutes);
app.use("/api/sections", SectionRoutes);
app.use('/api/blogs',blogRoutes);
app.use('/api/typemaster',typeMasterRoutes);
app.use('/api/blocktypemaster',blockTypeMasterRoutes);

/*//IOG
app.use('/api/blogcomment',blogcommentRoute);
app.use('/api/jobform',jobformRoute);
app.use('/api/jobapplicationform',jobapplicationformRoute);

*/

app.post('/send-email', (req, res)=> {
	// console.log('req',req.body);
	let transporter = nodeMailer.createTransport({
			// service: 'Gmail',
			host: 'smtp.gmail.com',
			port: 587,
			// port: 465,
			auth: {
				/*user: 'kycwealthyvia@gmail.com',
				pass: 'Artha123$'*/
				 user : 'iassureitmail@gmail.com',
				 pass : 'iAssureIT@123'
			}
		});
		console.log('after transport');
		let mailOptions = {
			
			// from   : '"Wealthyvia" <kycwealthyvia@gmail.com>', // sender address
			from   : '"iAssureIT" <iassureitmail@gmail.com>', // sender address
			to     : req.body.email, // list of receivers
			subject: req.body.subject, // Subject line
			text   : req.body.text, // plain text body
			html   : req.body.mail, // html body
			attachments : [
								{
								filename: data.title + ".jpg",
								contentType:  'image/jpeg/file/pdf/docx',
								content: new Buffer.from(req.body.file.split("base64,")[1], "base64"),
								}
							]
		};
		console.log('after mailoption');
		//name email mobilenumber message
		// console.log("mailOptions",mailOptions);
		
		transporter.sendMail(mailOptions, (error, info) => {
			console.log('in mail');
			if (error) {
				
				console.log("send mail error",error);
				return "Failed";
			}
			if(info){
				console.log('in info');
				// return "Success";
				res.status(200).json({ 
					
					message: "Success",
					// return "Success",

				});
			}
	
			res.render('index');
		});
});
app.post('/send-email/portalreview', (req, res)=> {
	// console.log('req',req.body);
	let transporter = nodeMailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		auth: { 
			// user: 'review.wealthyvia@gmail.com',
			// pass: 'Artha123$'
			user : 'iassureitmail@gmail.com',
				pass : 'iAssureIT@123'
		}
	});
	let mailOptions = {
			// from   : '"Wealthyvia" <review.wealthyvia@gmail.com>', // sender address
			from   : '"Wealthyvia" <iassureitmail@gmail.com>', // sender address
			to     : req.body.email, // list of receivers
			subject: req.body.subject, // Subject line
			text   : req.body.text, // plain text body
			html   : req.body.mail // html body
		};
		// console.log("mailOptions",mailOptions);

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log("send mail error",error);
				return "Failed";
			}
			if(info){
			   return "Success";
			}
			// console.log('Message %s sent: %s', info.messageId, info.response);
			res.render('index');
		});
});


// handle all other request which not found 
app.use((req, res, next) => {
	const error = new Error('Not Found Manual ERROR');
	error.status = 404;
	next(error);
		// when we get 404 error it send to next 
});

// it will handel all error in the application
app.use((error, req, res, next) => {
	// 500 type error is used when we use database
	res.status(error.status || 500);
	res.json({
		error:{
			message:error.message
		}
	})
});

module.exports = app;
