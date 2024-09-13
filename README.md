# 📝 Unique Path and Shareable Resume - Milestone 5

## 🎯 Objective
### The focus of Milestone 5 is to generate a unique URL for each resume based on the user’s username and provide options to share and download the resume as a PDF. This feature allows users to easily share their resume with others and also have a downloadable copy.

## 📋 Features

. Unique URL Generation: Each user’s resume will have a unique URL based on their username, making the resume accessible at a custom path (e.g., username. vertical. app/resume).

. Shareable Link: Users can share the unique URL of their resume with others.

. PDF Download: Users can download their resume as a PDF for offline use or printing.

## 🛠️ Implementation Details

## 1. Unique URL Generation (50 Points):
. When a user creates their resume, the system generates a unique path based on their username.

. The URL will look something like a username. vercel.app/resume, ensuring each user has a custom link to their resume.

## 2. Link Sharing and PDF Download (50 Points):
. Users are provided with a shareable link to their unique resume URL.

. The resume can be downloaded as a PDF with a simple click.

## 🛠️ Scoring Breakdown:

### 1. Unique URL Generation (50 Points):
. Does the system correctly generate a unique URL based on the user’s username?

. Does the URL follow the expected format (e.g., username.vercel.app/resume)?


### 2. Link Sharing and PDF Download (50 Points):
. Can users share their resume link via the unique URL?

. Does the download feature generate a properly formatted PDF of the resume?

## 💻 Technology Stack

. Next.js: For dynamic routing and handling the unique path generation.

. TypeScript: Ensures strong typing and efficient code logic.

. HTML/CSS: For structuring and styling the resume.

. PDF Generation Library: Such as html2pdf or jspdf to enable the download of the resume as a PDF.

## 🚀 How It Works:

### 1. Unique URL Creation:
. Upon resume generation, a custom path is created for the user based on their username. This path is unique and allows access to the resume via the URL.


### 2. Shareable Link:
. A shareable link is displayed to the user that they can copy and share with others to view their resume.


### 3. Download as PDF:
. The user can click a Download button to save the resume as a PDF file. This functionality converts the current resume layout into a well-formatted PDF document.

