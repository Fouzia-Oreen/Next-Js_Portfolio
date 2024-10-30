import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import { Tailwind } from "@react-email/tailwind";
  
  type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
  };
  
  export default function ContactFormEmail({
    message,
    senderEmail,
  }: ContactFormEmailProps) {
    return (
      <Html>
        <Head />
        <Preview>New message from your portfolio site</Preview>
        <Tailwind>
          <Body className="bg-gray-100 text-black">
            <Container>
              <Section className="bg-sky-100  my-10 px-6 py-4 rounded-md">
              <Heading className="leading-tight">
              Subject: This is a demo email from {senderEmail}
              </Heading>
              <Text className="text-gray-950">
              Dear John Doe,
              <br/>
              Thank you for expressing interest in [Your Software] during our recent conversation. I’m excited to share how our software can help you achieve [Specific Benefit] and streamline your operations.
              <br/>
              To help you better understand our solution, I’d like to invite you to an exclusive live demo of [Your Software]. During this session, we will walk you through the key features and answer any questions you may have.
              <br/>
              {message}
              <br/>
              <br/>
              Looking forward to showcasing the value of [Your Software] to your business!
              <br/>
              <br/>
              Best regards,
              <br/>
              John Doe
              <br/>
              {senderEmail}
              <br/>
              +000 1223 3345 00
              </Text>
              <Hr />
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  }