module.exports = {

"[project]/.next-internal/server/app/api/locations/[employeeId]/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/locations/[employeeId]/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DELETE": (()=>DELETE),
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// In-memory storage (same as in locations/route.ts)
let locations = [
    {
        id: '1',
        employeeId: '1',
        latitude: 40.7128,
        longitude: -74.0060,
        address: 'New York, NY, USA',
        timestamp: new Date().toISOString(),
        accuracy: 10,
        source: 'gps'
    },
    {
        id: '2',
        employeeId: '2',
        latitude: 34.0522,
        longitude: -118.2437,
        address: 'Los Angeles, CA, USA',
        timestamp: new Date().toISOString(),
        accuracy: 15,
        source: 'gps'
    },
    {
        id: '3',
        employeeId: '1',
        latitude: 40.7589,
        longitude: -73.9851,
        address: 'Times Square, New York, NY, USA',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        accuracy: 8,
        source: 'gps'
    }
];
async function GET(request, { params }) {
    try {
        const { searchParams } = new URL(request.url);
        const limit = searchParams.get('limit');
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');
        // Filter locations for the specific employee
        let employeeLocations = locations.filter((loc)=>loc.employeeId === params.employeeId);
        // Filter by date range if provided
        if (startDate) {
            const start = new Date(startDate);
            employeeLocations = employeeLocations.filter((loc)=>new Date(loc.timestamp) >= start);
        }
        if (endDate) {
            const end = new Date(endDate);
            employeeLocations = employeeLocations.filter((loc)=>new Date(loc.timestamp) <= end);
        }
        // Sort by timestamp (most recent first)
        employeeLocations.sort((a, b)=>new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        // Limit results if specified
        if (limit) {
            const limitNum = parseInt(limit, 10);
            if (!isNaN(limitNum) && limitNum > 0) {
                employeeLocations = employeeLocations.slice(0, limitNum);
            }
        }
        // Get current location (most recent)
        const currentLocation = employeeLocations.length > 0 ? employeeLocations[0] : null;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            data: {
                employeeId: params.employeeId,
                currentLocation,
                locationHistory: employeeLocations,
                totalRecords: employeeLocations.length
            },
            message: 'Employee locations retrieved successfully'
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to retrieve employee locations'
        }, {
            status: 500
        });
    }
}
async function DELETE(request, { params }) {
    try {
        const { searchParams } = new URL(request.url);
        const locationId = searchParams.get('locationId');
        if (locationId) {
            // Delete specific location record
            const locationIndex = locations.findIndex((loc)=>loc.id === locationId && loc.employeeId === params.employeeId);
            if (locationIndex === -1) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Location record not found'
                }, {
                    status: 404
                });
            }
            const deletedLocation = locations[locationIndex];
            locations.splice(locationIndex, 1);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                data: deletedLocation,
                message: 'Location record deleted successfully'
            });
        } else {
            // Delete all location records for the employee
            const employeeLocations = locations.filter((loc)=>loc.employeeId === params.employeeId);
            if (employeeLocations.length === 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'No location records found for this employee'
                }, {
                    status: 404
                });
            }
            locations = locations.filter((loc)=>loc.employeeId !== params.employeeId);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                data: {
                    deletedCount: employeeLocations.length,
                    employeeId: params.employeeId
                },
                message: 'All location records deleted successfully'
            });
        }
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to delete location records'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__4cf6b183._.js.map