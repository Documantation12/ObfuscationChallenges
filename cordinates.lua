--[[
                  Made By CallMeChin
https://v3rmillion.net/member.php?action=profile&uid=605761
--]]
local coordgui = Instance.new("ScreenGui")
local main = Instance.new("Frame")
local title = Instance.new("TextLabel")
local credit = Instance.new("TextLabel")
local grab = Instance.new("TextButton")
local copy = Instance.new("TextButton")
local cords = Instance.new("TextLabel")
--Properties:
coordgui.Name = "coordgui"
coordgui.Parent = game.CoreGui

main.Name = "main"
main.Parent = coordgui
main.BackgroundColor3 = Color3.new(1, 1, 1)
main.Position = UDim2.new(0.352638364, 0, 0.405797124, 0)
main.Size = UDim2.new(0, 228, 0, 142)
main.Style = Enum.FrameStyle.DropShadow
main.Active = true
main.Draggable = true

title.Name = "title"
title.Parent = main
title.BackgroundColor3 = Color3.new(0, 0, 0)
title.Position = UDim2.new(-0.0517418832, 0, -0.054933358, 0)
title.Size = UDim2.new(0, 235, 0, 19)
title.Font = Enum.Font.SciFi
title.Text = "Coordinates Grabber Gui"
title.TextColor3 = Color3.new(1, 1, 1)
title.TextSize = 14

grab.Name = "grab"
grab.Parent = main
grab.BackgroundColor3 = Color3.new(0, 0, 0)
grab.Position = UDim2.new(0.0381504558, 0, 0.600263834, 0)
grab.Size = UDim2.new(0, 128, 0, 31)
grab.Font = Enum.Font.SciFi
grab.Text = "Grab Coordinates"
grab.TextColor3 = Color3.new(1, 1, 1)
grab.TextSize = 14

copy.Name = "copy"
copy.Parent = main
copy.BackgroundColor3 = Color3.new(0, 0, 0)
copy.Position = UDim2.new(0.697107434, 0, 0.595215261, 0)
copy.Size = UDim2.new(0, 52, 0, 32)
copy.Font = Enum.Font.SciFi
copy.Text = "Copy"
copy.TextColor3 = Color3.new(1, 1, 1)
copy.TextSize = 14

cords.Name = "cords"
cords.Parent = main
cords.BackgroundColor3 = Color3.new(0, 0, 0)
cords.Position = UDim2.new(0.0420129336, 0, 0.199266031, 0)
cords.Size = UDim2.new(0, 194, 0, 37)
cords.Font = Enum.Font.SciFi
cords.Text = ""
cords.TextColor3 = Color3.new(1, 1, 1)
cords.TextSize = 14

-- Helper function to round coordinates
local function roundCoords(vector3)
    return Vector3.new(math.floor(vector3.X + 0.5), math.floor(vector3.Y + 0.5), math.floor(vector3.Z + 0.5))
end

-- Scripts:
grab.MouseButton1Down:Connect(function()
    local roundedCoords = roundCoords(game.Players.LocalPlayer.Character.HumanoidRootPart.Position)
    cords.Text = tostring(roundedCoords)
    wait(0.25)
    print(tostring(roundedCoords))
end)

copy.MouseButton1Down:Connect(function()
    setclipboard(cords.Text)
end)

local UserInputService = game:GetService("UserInputService")

UserInputService.InputBegan:Connect(function(input)
    if input.KeyCode == Enum.KeyCode.P then
        coordgui:Destroy()
    end
end)
