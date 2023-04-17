import express, { Request, Response } from "express";

export const sendEmail = async (req: Request, res: Response) => {
  res.send("send email");
};
