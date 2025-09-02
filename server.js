import express from "express";

class Server {
    constructor() {
        this.server = express();
        this.setupMiddleware();
        this.setupRoutes();
    }

    setupMiddleware() {
        this.server.set("view engine", "ejs");
        this.server.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
        this.server.use(express.static("public"));

    }
    setupRoutes() {
        this.server.get("/", (_, res) => {
            res.render("home");
        });

        this.server.get("/personal_info", (_, res) => {
            res.render("personal_info");
        });

        this.server.get("/academic_info", (_, res) => {
            res.render("academic_info");
        });

        this.server.get("/skills", (_, res) => {
            res.render("skills");
        });

        this.server.get("/projects", (_, res) => {
            res.render("projects");
        });

        this.server.get("/volunteering", (_, res) => {
            res.render("volunteering");
        });

        this.server.get("/certifications", (_, res) => {
            res.render("certifications");
        });

        this.server.get("/contact", (_, res) => {
            res.render("contact");
        });
    }

    getApp() {
        return this.server;
    }
}

export { Server };