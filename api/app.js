const express           = require('express');
const app 				= express();
const morgan 			= require('morgan');// morgan call next function if problem occure
const bodyParser 		= require('body-parser');// this package use to formate json data 
const mongoose 			= require ('mongoose');
var   nodeMailer 		= require('nodemailer');
const globalVariable	= require("./nodemon.js");

// Routes - CMS
const blockRoutes 					= require('./api/cms/routes/blocks.js');
const pageRoutes 					= require('./api/cms/routes/pages.js');
/**/
const blogRoutes 					= require('./api/cms/routes/blogs.js');

/**/
// Routes which should handle requests - Core Admin

const systemSecurityRoutes 				= require('./api/coreAdmin/systemSecurity/RoutesSystemSecurity.js');
const userRoutes 						= require('./api/coreAdmin/userManagement/RoutesUsers.js');
const rolesRoutes						= require('./api/coreAdmin/rolesManagement/RoutesRoles.js');
const masternotificationRoutes			= require('./api/coreAdmin/notificationManagement/RoutesMasterNotification.js');
const notificationRoutes				= require('./api/coreAdmin/notificationManagement/RoutesNotification.js');
const companySettingsRoutes				= require('./api/coreAdmin/companySettings/RoutesCompanySettings.js');
const projectSettingRoutes 				= require('./api/coreAdmin/projectSettings/RoutesProjectSettings.js');
const globalMasterRoutes 				= require('./api/coreAdmin/globalMaster/RoutesGlobalMaster.js');
const paymentgatewayRoutes 				= require('./api/coreAdmin/paymentgateway/Routes.js');

const entityRoutes						= require("./api/coreAdmin/entityMaster/RoutesEntityMaster.js");

// const mappingRoutes						= require("./coreAdmin/entityMaster/RoutesMappingMaster.js");

const packageTypeMasterRoutes			= require("./api/coreAdmin/packageTypeMaster/RoutesPackageTypeMaster.js");
const packageMasterRoutes				= require("./api/coreAdmin/packageMaster/RoutesPackageMaster.js");

const categoryMasterRoutes			    = require("./api/coreAdmin/categoryMaster/RoutesCategoryMaster.js");
const brandMasterRoutes			    	= require("./api/coreAdmin/brandMaster/RoutesBrandMaster.js");
const documententitymasterRoutes		= require("./api/coreAdmin/DocumentEntityMaster/Routes.js");
const documentListMasterRoutes			= require("./api/coreAdmin/DocumentListMaster/Routes.js");
const departmentMasterRoutes			= require("./api/coreAdmin/departmentMaster/RoutesDepartmentMaster.js");
const designationMasterRoutes			= require("./api/coreAdmin/designationMaster/RoutesDesignationMaster.js");
const fuelTypeMasterRoutes				= require("./api/coreAdmin/fuelTypeMaster/RoutesFuelTypeMaster.js");
const locationTypeMasterRoutes			= require("./api/coreAdmin/locationTypeMaster/RoutesLocationTypeMaster.js");
const taxNameMasterRoutes				= require("./api/coreAdmin/taxNameMaster/RoutesTaxNameMaster.js");
const modelMasterRoutes					= require("./api/coreAdmin/modelMaster/RoutesModelMaster.js");
const vehicleMasterRoutes				= require("./api/coreAdmin/vehicleMaster/RoutesVehicleMaster.js");
const personMasterRoutes				= require("./api/coreAdmin/personMaster/RoutesPersonMaster.js");
const contractRoutes				    = require("./api/coreAdmin/contract/RoutesContracts.js");
const entityMappingRoutes				= require("./api/coreAdmin/EntityMapping/RoutesEntityMapping.js");
const vehicleDriverMappingRoutes		= require("./api/coreAdmin/vehicleDriverMapping/RoutesVehicleDriverMapping.js");
const bookingRoutes				        = require("./api/coreAdmin/bookingMaster/RoutesBookingMaster.js");
const moduleRoutes				        = require("./api/coreAdmin/moduleMaster/RoutesModuleMaster.js");
const facilityRoutes				    = require("./api/coreAdmin/facilityMaster/RoutesFacilityMaster.js");
const accessRoutes				    	= require("./api/coreAdmin/accessManagement/RoutesAccessMaster.js");
const expenseTypeRoutes				    = require("./api/coreAdmin/expenseTypeMaster/RoutesExpenseTypeMaster.js");
const EventMappingRoutes				= require("./api/coreAdmin/EventMappingMaster/RoutesEventMapping.js");
const PurposeOfTravelRoutes				= require("./api/coreAdmin/purposeOfTravelMaster/RoutesPurposeOfTravelMaster.js");

//============ To Start API on Server with Authentication ========
// mongoose.connect('mongodb://localhost/'+globalVariable.dbname,{
// 	useNewUrlParser		: true,
	// useUnifiedTopology	: true,
 	// useCreateIndex: true,
// })
// mongoose.promise = global.Promise;

// global.titleCase = function(Str){
//     return new Promise(function(resolve,reject){
//         resolve(Str.charAt(0).toUpperCase()+Str.slice(1));
//     });
// }

//============ To Start API on Local Server without CORS Error ========
mongoose.connect('mongodb://localhost/'+globalVariable.dbname,{
	// mongoose.connect('mongodb://localhost/'+dbname,{
		useNewUrlParser: true,
		useUnifiedTopology: true 
	})
mongoose.set('useCreateIndex', true);
mongoose.promise = global.Promise;



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
app.use("/api/entitymaster", entityRoutes);
// app.use("/api/mappingmaster", mappingRoutes);
app.use("/api/packagetypemaster", packageTypeMasterRoutes);

app.use("/api/paymentgateway", paymentgatewayRoutes);

app.use("/api/packagemaster", packageMasterRoutes);
app.use("/api/categorymaster", categoryMasterRoutes);
app.use("/api/brandmaster", brandMasterRoutes);
app.use("/api/documententitymaster", documententitymasterRoutes);
app.use("/api/documentlistmaster", documentListMasterRoutes);
app.use("/api/departmentmaster", departmentMasterRoutes);
app.use("/api/designationmaster", designationMasterRoutes);
app.use("/api/fueltypemaster", fuelTypeMasterRoutes);
app.use("/api/locationtypemaster", locationTypeMasterRoutes);
app.use("/api/taxnamemaster", taxNameMasterRoutes);
app.use("/api/modelmaster", modelMasterRoutes);
app.use("/api/vehiclemaster", vehicleMasterRoutes);
app.use("/api/modulemaster", moduleRoutes);
app.use("/api/facilitymaster", facilityRoutes);

app.use("/api/personmaster", personMasterRoutes);
app.use("/api/contract", contractRoutes);
app.use("/api/entitymapping", entityMappingRoutes);
app.use("/api/vehicledrivermapping", vehicleDriverMappingRoutes);
app.use("/api/bookingmaster", bookingRoutes);
app.use("/api/accessmaster", accessRoutes);
app.use("/api/expensetypemaster", expenseTypeRoutes);
app.use("/api/eventmapping", EventMappingRoutes);
app.use("/api/purposeoftravelmaster", PurposeOfTravelRoutes);
//================ CMS ==================
app.use("/api/blocks",blockRoutes);
app.use("/api/pages",pageRoutes);
app.use("/api/blogs",blogRoutes);

app.post('/send-email', (req, res)=> {
	let transporter = nodeMailer.createTransport({
		host: globalVariable.emailHost,
		port: globalVariable.emailPort,
		auth: {
			user: globalVariable.user,
			pass: globalVariable.pass
		}
	});
	console.log("transporter",transporter);
	let mailOptions = {
		from   : '"iAssureIT" <'+globalVariable.user+'>', // sender address
		to     : req.body.email, // list of receivers
		subject: req.body.subject, // Subject line
		text   : req.body.text, // plain text body
		html   : req.body.mail // html body
	};	
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {			
			return "Failed";
		}
		if(info){
			res.status(200).json({ 
				message: "Success",
			});
		}else{
			res.status(401).json({ 
				message: "Failed",
			});
		}
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
	
	res.status(error.status || 500);
	res.json({
		error:{
			message:error.message
		}
	})
});

module.exports = app;
