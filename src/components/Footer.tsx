"use client";

import { useState } from "react";

import { message as AntdMessage, Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

import { dataPoster, launchExternalUrl } from "@/utils";

import profile from "@/data/profile.json";

export default function Footer() {
  const [emailForm] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = () => {
    emailForm.validateFields().then(async (values) => {
      const { message, email, name } = values;
      try {
        setIsLoading(true);
        const response = await dataPoster(process.env.MAILER_API, {
          emailBody: message,
          senderEmail: email,
          senderName: name,
          emailSubject: `New message from ${name}`,
        });
        if (response.ok) {
          AntdMessage.success({
            content: "Email sent successfully!",
            duration: 5,
          });
          emailForm.resetFields();
        } else throw new Error("Failed to send email");
      } catch (e) {
        AntdMessage.open({
          type: "error",
          content:
            "Oops, that wasn't supposed to happen. Click here to send an email instead.",
          duration: 10,
          onClick: () => {
            launchExternalUrl(
              `mailto:${profile.email}?subject=New message from ${name}&body=${message}`,
            );
            emailForm.resetFields();
          },
        });
      } finally {
        setIsLoading(false);
      }
    });
  };

  return (
    <>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-full md:w-1/2 bg-gray-100 rounded-lg sm:mr-10 p-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl">Got an idea in mind?</h1>
          <h2 className="text-3xl">
            Let&apos;s connect <span className="inline md:hidden">👇</span>
            <span className="hidden md:inline">👉</span>
          </h2>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <Form form={emailForm} disabled={isLoading}>
            <Form.Item
              rules={[{ required: true, message: "Your name please ):" }]}
              name="name"
            >
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter a valid email address",
                  type: "email",
                },
              ]}
              name="email"
            >
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@acme.co"
                  className="w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: "Don't be shy now" }]}
              name="message"
            >
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <TextArea
                  id="message"
                  rows={6}
                  placeholder="Your message here..."
                  className="w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </Form.Item>
            <Button
              disabled={isLoading}
              type="text"
              onClick={sendEmail}
              size="large"
              loading={isLoading}
              className="w-full py-2 px-6 border-2 focus:outline-none border-slate-100 rounded text-lg"
            >
              Send 🚀
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
