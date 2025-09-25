import { Scrollbars } from 'react-custom-scrollbars-2';

export default function ExploreMenuWrapper({ children }) {
  return (
    <Scrollbars
      autoHide
      renderThumbHorizontal={(props) => (
        <div {...props} style={{ backgroundColor: "transparent" }} />
      )}
    >
      <div className="flex gap-8">
        {children}
      </div>
    </Scrollbars>
  );
}
