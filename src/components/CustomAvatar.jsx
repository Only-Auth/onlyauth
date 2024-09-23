const alphabetColors = {
  A: 'bg-red-200',
  B: 'bg-orange-200',
  C: 'bg-yellow-200',
  D: 'bg-green-200',
  E: 'bg-teal-200',
  F: 'bg-blue-200',
  G: 'bg-indigo-200',
  H: 'bg-purple-200',
  I: 'bg-pink-200',
  J: 'bg-red-300',
  K: 'bg-orange-300',
  L: 'bg-yellow-300',
  M: 'bg-green-300',
  N: 'bg-teal-300',
  O: 'bg-blue-300',
  P: 'bg-indigo-300',
  Q: 'bg-purple-300',
  R: 'bg-pink-300',
  S: 'bg-red-400',
  T: 'bg-orange-400',
  U: 'bg-yellow-400',
  V: 'bg-green-400',
  W: 'bg-teal-400',
  X: 'bg-blue-400',
  Y: 'bg-indigo-400',
  Z: 'bg-purple-400',
}

function CustomAvatar({ alphabet }) {
  // Get the background color class for the given alphabet
  const bgColorClass = alphabetColors[alphabet.toUpperCase()] || 'bg-gray-400'

  return (
    <div
      className={`rounded-full w-12 h-12 flex items-center justify-center ${bgColorClass}`}
    >
      <p className="uppercase font-semibold text-xl">{alphabet}</p>
    </div>
  )
}

export default CustomAvatar
