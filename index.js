#!/usr/bin/env node

const { execSync } = require("child_process");

const command = process.argv[2];

if (command === "list") {
    try {
        const packages = execSync("npm list --depth=0").toString();
        console.log("Installed packages:\n", packages);

    } catch (err) {
        console.error("Error listing packages:", err.message);
    }
} else {
    console.log("Command not recognized. Try `mycli list`.");
}