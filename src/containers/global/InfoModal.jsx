import React from "react";
import feather from "feather-icons";

const Modal = ({ showModal, setShowModal }) => {
  const links = [
    {
      text: "An blog site updated regularly by the awesome people at Mille",
      link: "https://www.milleworld.com/primary-tag/palestine/",
    },
    {
      text: "Celebrities against genocide",
      link: "https://www.milleworld.com/celebrities-solidarity-palestine/",
    },
    {
      text: "UN report regarding the latest atrocities",
      link: "https://news.un.org/en/story/2023/11/1143347",
    },
  ];

  return (
    showModal && (
      <div
        className="fixed z-50 inset-0 overflow-y-auto"
        onClick={() => setShowModal(false)}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative bg-white rounded-md w-2/3 max-w-full">
            <div className="flex items-center bg-emerald-100 p-4">
              <h1 className="flex-grow">End the genocide</h1>
              <div className="ml-auto" onClick={() => setShowModal(false)}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: feather.icons["x"].toSvg({
                      "stroke-width": 0.75,
                      height: 32,
                      width: 32,
                    }),
                  }}
                />
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">
                What is happening?
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                An offensive starting{" "}
                <span className="font-black">07 October 2023</span> that is
                still ongoing the immoral genocide has led to an alarming toll,
                with over 24,762<sup>*</sup> Gazans murdered of which 9,600 were
                children and 6,750 were women. Injuring a score of over 62,108
                others, and that is just in Gaza, over at the West Bank the
                israel has indiscriminantly killed over 368 people of which
                about 100 were just children. Journalists, UN officials, and
                medical professionals have been disregarded. The use of carpet
                bombing and white phosphorus, both prohibited by the
                international community, in the densely populated area resulted
                in the destruction of hospitals, schools, and refugee camps
                where women, children, the sick, and the weak sought shelter.
                <br />
                <br />
                <small className="text-xs mx-6 mb-4">
                  <sup>*</sup> Since the Gazan health ministry has collapsed we
                  the regular casualty updates have been impeded since 10 Nov
                  2023, and the numbers can be much higher
                </small>
              </p>
              <h2 className="mt-2 text-lg font-medium text-gray-900">
                How to help?
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                There are several ways you can help Palestinians. One of the
                easiest ways is to find a relevant charity that helps
                Palestinians either living as refugees in a foreign country or
                one that helps Palestinians living in Palestine and donate
                either an ongoing monthly sum or one lump sum. Another way is
                through educating yourself and others around you so you are not
                fooled by what the "civilized news" feed you.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Below are some of the links to get you started:
              </p>
            </div>

            <div className="mx-6 py-4 bg-gray-50">
              {links.map((link) => (
                <div className="mx-4">
                  <a
                    key={link.text}
                    href={link.link}
                    className="mr-4 text-sm font-medium text-blue-600 hover:text-blue-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.text}
                  </a>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-900 font-semibold px-6 py-4">
              Spreading the news can be as effective as anything
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
