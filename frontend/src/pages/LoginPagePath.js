const app_name = 'thefridgelist'

// Function to build the path to the backend
exports.buildPath = 
function buildPath(route)
{
    // If the app is in production, use the herokuapp link
    if (process.env.NODE_ENV === 'production') {return 'https://' + app_name +  '.herokuapp.com/' + route;}
    // If the app is in development, use the localhost link
    else {return 'http://localhost:5050/' + route;}
}