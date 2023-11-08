import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Blogs | Job Hub</title>
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/8rnFQ7b/pexels-moose-photos-1037999.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div className=" bg-[rgba(0,0,0,0.6)] absolute h-full w-full ">
          <div className="text-white w-full h-full flex items-center justify-center">
            <h2 className="text-white font-bold text-4xl">
              <span className="text-[#FF3611]">Blogs</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl md:text-2xl font-bold">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p className="text-xl">
              Access tokens and refresh tokens are commonly used in
              authentication and authorization systems, especially in the
              context of OAuth 2.0 and similar protocols.{" "}
            </p>
            <p className="text-2xl font-bold pt-4">Access Token:</p>
            <p>
              <span className="text-xl font-bold">Purpose: </span>An access
              token is a temporary credential that authorizes a client
              application to access specific resources on behalf of a user or
              itself.
            </p>
            <p>
              <span className="text-xl font-bold">How it works: </span>When a
              user or client application successfully authenticates and
              authorizes itself, the authorization server issues an access
              token. This token is typically a random string with a limited
              lifespan (usually short-lived), which allows the client to access
              protected resources or make API requests.
            </p>
            <p>
              <span className="text-xl font-bold">
                Storage on the client-side:{" "}
              </span>
              Access tokens are typically stored on the client-side, as they
              need to be presented with each request to access protected
              resources. Common storage locations include cookies, local
              storage, or in-memory variables, depending on the application's
              security requirements..
            </p>
            <p className="text-2xl pt-4 font-bold">Refresh Token:</p>
            <p>
              <span className="text-xl font-bold">Purpose: </span>A refresh
              token is a long-lived credential that is used to obtain new access
              tokens without the user having to reauthenticate. It's used to
              extend the validity of the access token.
            </p>
            <p>
              <span className="text-xl font-bold">How it works: </span>When an
              access token expires, the client can use a refresh token to
              request a new access token from the authorization server without
              user involvement. Refresh tokens are more sensitive and long-lived
              compared to access tokens.
            </p>
            <p>
              <span className="text-xl font-bold">
                Storage on the client-side:{" "}
              </span>
              Refresh tokens should be stored securely on the client-side to
              prevent unauthorized access. They are typically stored in a more
              secure manner than access tokens, such as in an HTTP-only cookie,
              secure storage, or a dedicated token management system.
            </p>
          </div>
        </div>
        <div className="collapse bg-base-200 mt-3">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            What is express js? What is Nest JS?
          </div>
          <div className="collapse-content">
            <p>
              <span className="text-xl font-bold">Express.js: </span>{" "}
              Express.js, often referred to simply as Express, is a minimal and
              flexible web application framework for Node.js, a popular
              JavaScript runtime environment. It provides a set of features and
              tools for building web and mobile applications and APIs
              (Application Programming Interfaces). Express is open-source and
              has become one of the most popular and widely used frameworks for
              developing web applications in Node.js.
            </p>
            <p>
              <span className="text-xl font-bold pt-4">Nest.js: </span>
              NestJS is a popular open-source framework for building scalable
              and maintainable server-side applications with Node.js. It is
              designed to make it easy for developers to create robust and
              efficient backends for web and mobile applications. NestJS
              leverages TypeScript, a statically typed superset of JavaScript,
              and takes inspiration from both traditional server-side frameworks
              like Express.js and modern front-end development concepts to
              provide a well-structured, organized, and extensible framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
