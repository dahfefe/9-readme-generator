// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    "MIT License": "[![MIT License](https://opensource.org/license/mit)(https://opensource.org/licenses/MIT)]",
    "Apache License 2.0": "[![Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)(https://www.apache.org/licenses/LICENSE-2.0)]",
    "GNU General Public License v3.0": "[![GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)(https://www.gnu.org/licenses/gpl-3.0.en.html)]",
    "Mozilla Public License 2.0": "[![MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/)(https://www.mozilla.org/en-US/MPL/2.0/)]",
  };
 
  if (licenseBadges[license]) {
    return licenseBadges[license]
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  // Base URL for GitHub licenses
  const baseUrl = "https://opensource.org/licenses/";

  // Lowercase and remove whitespace from the license name
  const normalizedLicense = license.trim().toLowerCase();

  // Replace common aliases with official names
  const licenseMap = {
    "mit": "mit",
    "gpl": "gpl-3.0", // Default to GPLv3 for ambiguity
    "apache": "apache-2.0",
  };

  // Check if license exists in the map, otherwise use the input directly
  const licenseName = licenseMap[normalizedLicense] || normalizedLicense;

  // Construct the full license URL
  const licenseUrl = baseUrl + licenseName;

  return licenseUrl;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
