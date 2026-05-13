import edjsHTML from "editorjs-html";

const EditorJsRenderer = ({ data }) => {
  let content = data?.content || data;

  if (typeof content === 'string') {
    try {
      content = JSON.parse(content);
    } catch (e) {
      console.error("Failed to parse content string:", e);
      return null;
    }
  }

  // If content is not the right shape, check if it's nested or under different keys
  if (!content?.blocks) {
      const alternativeContent = data?.content || data?.body || data?.description || data;
      if (alternativeContent && (typeof alternativeContent === 'object' || typeof alternativeContent === 'string')) {
          content = alternativeContent;
      }
      if (typeof content === 'string') {
          try { content = JSON.parse(content); } catch (e) {}
      }
  }

  if (!content || !content.blocks || !Array.isArray(content.blocks)) {
    return null;
  }

  const parser = edjsHTML();
  const htmlArray = parser.parse(content);   // This usually returns an ARRAY of HTML strings

  // Join the array into a single HTML string
  const htmlString = Array.isArray(htmlArray) ? htmlArray.join('') : htmlArray;
  const holder = 'editorjs'
  return (
    <>
      <style>
        {`
      h1 { font-size: 2.5rem; font-weight: 700; line-height: 2.7rem; color: white; }
     h2 { font-size: 2rem; font-weight: 700; margin-top: 3rem; color: white; }
     h3 { font-size: 1.75rem; font-weight: 600; margin-top: 1.5rem; color: white; }
      h4 { font-size: 1.5rem; font-weight: 600; margin-top: 1.5rem; color: white; }
      h5 { font-size: 1.25rem; font-weight: 500; margin-top: 1.5rem; color: white;}
      h6 { font-size: 1rem; font-weight: 500; margin-top: 1rem; color: white;}
      p {margin-top: 0.5rem;}
    `}
      </style>
      <div
        dangerouslySetInnerHTML={{ __html: htmlString }}
        className='block relative w-full px-4 md:px-24 mt-18'
      />
    </>
  );
};

export default EditorJsRenderer;