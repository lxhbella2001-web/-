import React, { useState, Suspense } from 'react';
import { Scene } from './components/Scene';
import { UIOverlay } from './components/UIOverlay';
import { TreeState } from './types';

function App() {
  const [treeState, setTreeState] = useState<TreeState>(TreeState.TREE_SHAPE);

  return (
    <div className="w-full h-screen relative bg-black">
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center text-[#C5A059] tracking-widest font-serif">
          LOADING EXPERIENCE...
        </div>
      }>
        <Scene treeState={treeState} />
      </Suspense>
      <UIOverlay treeState={treeState} setTreeState={setTreeState} />
    </div>
  );
}

export default App;