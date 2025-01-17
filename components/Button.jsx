import { View, Text, TouchableOpacity } from 'react-native'

export default ({ children, containerStyles, onClick, isLoading }) => (
    <TouchableOpacity
        onPress={onClick}
        activeOpacity={0.7}
        disabled={isLoading}
        className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
    >
      <Text className="text-primary font-psemibold">{children}</Text>
    </TouchableOpacity>
)