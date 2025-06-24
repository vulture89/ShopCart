import Container from "@/components/Container";
import { Title } from "@/components/ui/text";
import React from "react";

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return (
    <div>
      <Container>
        <Title className="text-3xl font-bold mb-4">
          <p>{slug}</p>
        </Title>
      </Container>
    </div>
  );
};

export default SingleBlogPage;
